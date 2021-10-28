import React, { VFC, ReactNode } from 'react';

import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.palette.neutral.second,
  backgroundColor: '#000',
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius
}));

type Props = {
  test: string;
};

const StyledButton: VFC<Props> = (props: Props) => {
  const { test } = props;
  return <CustomButton variant='contained'>{test}</CustomButton>;
};

export default StyledButton;
