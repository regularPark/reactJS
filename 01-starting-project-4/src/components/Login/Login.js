import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../store/auth-context";
import Input from "../UI/Input/Input";

// useReducer에 사용할 함수는 컴포넌트 밖에 만들어야함.
// reducer 함수 내부에서는 컴포넌트 함수 내부에서 만들어진
// 어떤 데이터도 필요하지 않기 때문.
// 컴포넌트 내부에서 정의된 것들과 상호작용할 필요가 없음
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.val, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // useEffect(() => {
  //   console.log("EFFECT RUNNING");
  // }, []); // 처음 시작될때, state 업데이트 될 때, 즉 모든 렌더링 이후에 실행
  // // 빈 배일을 dependency로 추가하면 실행될 때 한 번만.

  // 객체 디스트럭팅, 객체 내부에서 isValid를 추출해서 상수에 저장
  // destructing이란 전체 개체 대신 특정 속성을 사용한다는 것.
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    // cleanup 함수
    // state 함수가 전체적으로 실행되기 전에 실행됨.
    // but, 처음 실행되기 전에는 실행되지 않는다.
    return () => {
      clearTimeout(identifier);
      console.log("CLEANUP");
    };
  }, [emailIsValid, passwordIsValid]);
  // * 0907 - 모든 로그인 컴포넌트 함수 실행 후에 useEffect 함수를 다시 실행하라
  // * 그러나 이 경우엔 dependencies에 포함된 것들이 변경되었을 때만 실행.
  // ** 0908 - 객체 디스트럭팅 이후 dependencies를 변경 후 유효성 검사를 통과했을 시
  // ** 유효성 변경되지 않기 때문에 effect가 실행되지 않는다.
  // ** prop이 변경될 때마다 effect를 실행하고 싶지 않다면 위의 방식으로 코드 작성.

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
    // 가장 최근에 입력한 암호가 포함돼있지 않을 수 있다.
    // 리액트의 state 관리 특성 때문.
    // useReducer를 사용하기 좋은 사례.
    // 1. 함께 속한 State가 있는 경우, 입력값과 유효성이 있는 경우.
    // 2. 다른 state에 의존해 state를 업데이트하는 경우
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    // setEnteredPassword(event.target.value);

    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="email"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

// 리액트 훅은 리액트 함수 컴포넌트 또는 최상위 수준에서만 직접 호출해야 함
// 중첩 함수에서 호출하지 말 것.
// if 문에서도 안 됨.

// useEffect 훅은 참조하는 모든 항목을 dependency로 useEffect 내부에
// 추가해야 함.

// useState나 useReducer에 의해 노출된 state 업데이트 함수는
// 변경되지 않도록 리액트가 보장함.
// 따라서 useEffect의 dependency로 추가할 필요가 없음
