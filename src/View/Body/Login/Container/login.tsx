import React, { useContext, useCallback, VFC } from 'react';
import { useHistory } from 'react-router';
import auth, { TwitterAuthProvider } from 'firebase/auth';
import { FirebaseContext, UserContext } from '../../../../Other/Context/contexts';
import CompLoginDialog from '../Component/login';

const LoginDialog: VFC = () => {
  const { auth } = useContext(FirebaseContext);
  const { setCredential } = useContext(UserContext);
  const history = useHistory();

  const backClick = useCallback(() => {
    history.push('/');
  }, []);

  //react-firebaseuiのパッケージを使用、signInOptionsでプロバイダを増やせばそれに対応してログインボタンも増える。
  const uiConfig: any = {
    signInFlow: 'redirect',
    signInOptions: [
      {
        provider: TwitterAuthProvider.PROVIDER_ID,
        customParameters: { lang: 'ja' }
      }
    ],
    callbacks: {
      signInFailure: (error: any) => {
        console.log(error ? error : null);
      },
      // ログインが成功した時に呼ばれるコールバック関数。authResultにCredential情報を、
      //redirectUrlにsignInSuccessUrlというURLﾊﾟﾗﾒｰﾀで設定されていたパスを渡されるようになっている。
      signInSuccessWithAuthResult: (authResult: any, redirectUrl: any) => {
        //twitterのスクリーンネームやプロフィール文が格納されたCredentialはここでしか取得できないので
        //過ぎにContextに格納する
        setCredential(authResult as auth.UserCredential);
        //trueで返すとredirectUrlにリダイレクトされ、アプリがリロードされるので、その前にreact-routerでアプリ内
        //リダイレクトを設定してfalseを返している。
        const dest = redirectUrl || '/home';
        history.replace(dest);
        return false;
      }
    }
  };
  return <CompLoginDialog uiConfig={uiConfig} auth={auth} backClick={backClick} />;
};

export default LoginDialog;
