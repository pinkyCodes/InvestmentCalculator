import { useState } from 'react';
import { UserInput } from '../../models/user';
import FormInput from './FormInput';

interface InvestmentFormProps {
    onCalculate: (userInput: UserInput) => void;
};

const InvestmentForm = ({ onCalculate }: InvestmentFormProps): JSX.Element => {

    const [enteredCurrentSavings, setEnteredCurrentSavings] = useState(0);
    const [enteredYearlyContribution, setEnteredYearlyContribution] = useState(0);
    const [enteredExpectedReturn, setEnteredExpectedReturn] = useState(0);
    const [enteredDuration, setEnteredDuration] = useState(0);

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const currentUserInput = {
            currentSavings: enteredCurrentSavings,
            yearlyContribution: enteredYearlyContribution,
            expectedReturn: enteredExpectedReturn,
            duration: enteredDuration,
        };

        onCalculate(currentUserInput);
    };

    // const resetHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const resetHandler = (): void => {
        setEnteredCurrentSavings(0);
        setEnteredYearlyContribution(0);
        setEnteredExpectedReturn(0);
        setEnteredDuration(0);
    };

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.id) {
            case 'currentSavings':
                setEnteredCurrentSavings(+event.target.value);
                break;
            case 'yearlyContribution':
                setEnteredYearlyContribution(+event.target.value);
                break;
            case 'expectedReturn':
                setEnteredExpectedReturn(+event.target.value);
                break;
            case 'duration':
                setEnteredDuration(+event.target.value);
                break;
            default:
                break;
        }
    };

    // alternative where the logic is defined inside the jsx
    // const inputChangeHandler = (input, value) => {
    //     setUserInput((prevInput) => {
    //         return {
    //             ...prevInput,
    //             [input]: value,
    //         };
    //     });
    // };

    return (
        <FormInput
            currentSavings={enteredCurrentSavings}
            yearlyContribution={enteredYearlyContribution}
            expectedReturn={enteredExpectedReturn}
            duration={enteredDuration}
            onSubmit={submitHandler}
            onReset={resetHandler}
            onInputChange={inputChangeHandler}
        />
    );
};

export default InvestmentForm;
