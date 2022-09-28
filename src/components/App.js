import React, {useState, useEffect} from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false);
  //const auth = fbase.auth();
  //const [isLoggedIn, setIsLoggedIn] = useState(false); //userObj를 이용해 isLoggedIn 판별 (render를 하나 줄여줌)
  const [userObj, setUserObj] = useState(null);
  useEffect(() => { //component가 mount 될 때 실행
    //실제로 로그인이 되었는지 안되었는지 알 수 있음
    authService.onAuthStateChanged((user) => { //로그인, 로그아웃, 어플리케이션이 초기화 될 때 발생
      if(user) {
        //setIsLoggedIn(true); 
        
        /*방법 2
        setUserObj(user); //로그인한 user를 저장*/
        
        //방법1
        setUserObj({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });


      } else {
        setUserObj(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    //방법1
    setUserObj({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });

    /*방법2
    setUserObj(Object.assign({}, user));*/
  };

  /*firebase가 초기화되고 모든 걸 로드할 때까지 기다려줄 시간이 없음
  console.log(authService.currentUser);
  setInterval(() => {
    console.log(authService.currentUser);
  }, 2000);*/
  
  return (
  <>
  {init ? (
    <AppRouter
    refreshUser={refreshUser} 
    isLoggedIn={Boolean(userObj)} 
    userObj={userObj} 
    />
    )
   : "Initializing..."}
  </>
  );
}

export default App;
