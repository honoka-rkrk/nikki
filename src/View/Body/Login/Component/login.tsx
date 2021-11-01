import React, { VFC } from 'react';
import auth from 'firebase/auth';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DialogContentText from '@mui/material/DialogContentText';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

type LoginProps = {
  uiConfig: any;
  auth: auth.Auth | null;
  backClick: () => void;
};

const Login: VFC<LoginProps> = (props: LoginProps) => {
  const { uiConfig, auth = null, backClick } = props;

  return (
    <>
      <Card>
        <CardHeader title={<Typography>ログイン / 新規登録</Typography>} />
        <CardContent>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          <DialogContentText>
            <Typography>{'エントリーするためにはログインが必要です。'}</Typography>
            <Typography>
              {
                'なお、このアプリはユーザーの許可なくTwitterに投稿することはありません。'
              }
            </Typography>
          </DialogContentText>
        </CardContent>
        <CardActions>
          <Button onClick={backClick}>戻る</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Login;
