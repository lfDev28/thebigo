import { Snackbar } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { createNewTimeCheck } from '../api/postReq';

const CodeBlock: React.FC<{}> = (): JSX.Element => {
  const [code, setCode] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [error, setError] = useState<string>('');

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(createNewTimeCheck, {
    onSuccess: (tc) => {
      if (tc.data.length === 0) {
        setError('There was an error calculating the time complexity');
        setData('');
      }
      setData(tc.data);
    },
    onError: () => {
      alert('there was an error');
    },
  });

  if (isLoading) return <div>Calculating Time Complexity...</div>;

  return (
    <>
      <Snackbar
        open={isLoading}
        message="Calculating Time Complexity..."
        autoHideDuration={500}
      />
      <Snackbar open={data !== ''} message="Time Complexity Calculated!" />
      <Snackbar open={error !== ''} message={error} />

      <TextField
        label="Submit Code Here"
        multiline
        rows={4}
        onChange={(e) => setCode(e.target.value)}
        sx={{
          borderRadius: 20,
          width: '80%',
          pb: 4,
        }}
      />

      <div>
        <Button onClick={() => mutate(code)} variant="contained">
          Submit
        </Button>
      </div>

      <div>{data}</div>
    </>
  );
};

export default CodeBlock;
