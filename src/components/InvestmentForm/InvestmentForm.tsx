import { useState } from 'react';
import { UserInput } from '../../models/user';
import FormInput from './FormInput';
import classes from './InvestmentForm.module.css';
interface InvestmentFormProps {
    onCalculate: (userInput: UserInput) => void;
};

const initialUserInput = {
    currentSavings: 0,
    yearlyContribution: 0,
    expectedReturn: 0,
    duration: 0,
};

const InvestmentForm = ({ onCalculate }: InvestmentFormProps): JSX.Element => {

    const [userInput, setUserInput] = useState<UserInput>(initialUserInput);

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onCalculate(userInput);
    };

    // const resetHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const resetHandler = (): void => {
        setUserInput(initialUserInput);
    };

    const inputChangeHandler = (input: string, value: string) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +value,
            };
        });
    };

    return (
        <form className={classes.form} onSubmit={submitHandler}>

            <div className={classes['input-group']}>
                <FormInput
                    value={userInput.currentSavings}
                    id='currentSavings'
                    title='Current Savings ($)'
                    onChange={(event) => inputChangeHandler('currentSavings', event.target.value)}
                />
                <FormInput
                    value={userInput.yearlyContribution}
                    id='yearlyContribution'
                    title='Yearly Savings ($)'
                    onChange={(event) => inputChangeHandler('yearlyContribution', event.target.value)}
                />
            </div>

            <div className={classes['input-group']}>
                <FormInput
                    value={userInput.expectedReturn}
                    id={'expectedReturn'}
                    title='Expected Interest (%, per year)'
                    onChange={(event) => inputChangeHandler('expectedReturn', event.target.value)}
                />
                <FormInput
                    value={userInput.duration}
                    id={'duration'}
                    title='Investment Duration (years)'
                    onChange={(event) => inputChangeHandler('duration', event.target.value)}
                />
            </div>

            <p className={classes.actions}>
                <button type="reset" className={classes.buttonAlt} onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>

        </form>
    );
};

export default InvestmentForm;
