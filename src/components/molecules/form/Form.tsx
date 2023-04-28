import React, { useState } from 'react';
import Input from '../../atoms/input/Input';
import Button, { ButtonType } from '../../atoms/button/Button';

type FormProps = {
  onSubmit: (data: { email: string; password: string }) => void;
  buttonText?: string;
  buttonType?: ButtonType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Form: React.FC<FormProps> = ({
  onSubmit,
  buttonText = 'Submit',
  buttonType = 'button',
  onClick
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="email"
        label="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button onClick={onClick} type={buttonType} className="card-button">
        {buttonText}
      </Button>
    </form>
  );
};

export default Form;
