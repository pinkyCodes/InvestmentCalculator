import { useState } from "react";
import UserInput from "../models/UserInput.model";
interface InvestmentFormProps {
    onSubmitForm: (userInput: UserInput) => void;
};

const InvestmentForm: React.FC<InvestmentFormProps> = ({ onSubmitForm }) => {

    const [enteredCurrentSavings, setEnteredCurrentSavings] = useState<string>('');
    const [enteredYearlyContribution, setEnteredYearlyContribution] = useState<string>('');
    const [enteredExpectedReturn, setEnteredExpectedReturn] = useState<string>('');
    const [enteredDuration, setEnteredDuration] = useState<string>('');

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const currentUserInput = {
            'current-savings': enteredCurrentSavings,
            'yearly-contribution': enteredYearlyContribution,
            'expected-return': enteredExpectedReturn,
            'duration': enteredDuration,
        };

        onSubmitForm(currentUserInput);
    };

    // const resetHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const resetHandler = (): void => {
        setEnteredCurrentSavings('');
        setEnteredYearlyContribution('');
        setEnteredExpectedReturn('');
        setEnteredDuration('');
    };

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        switch (event.target.id) {
            case 'current-savings':
                setEnteredCurrentSavings(event.target.value);
                break;
            case 'yearly-contribution':
                setEnteredYearlyContribution(event.target.value);
                break;
            case 'expected-return':
                setEnteredExpectedReturn(event.target.value);
                break;
            case 'duration':
                setEnteredDuration(event.target.value);
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
        <form className="form" onSubmit={submitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        type="number"
                        id="current-savings"
                        aria-label="current-savings"
                        value={enteredCurrentSavings || ''}
                        onChange={inputChangeHandler}
                    // onChange={(event) => inputChangeHandler("current-savings", event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        type="number"
                        id="yearly-contribution"
                        aria-label="yearly-contribution"
                        value={enteredYearlyContribution || ''}
                        onChange={inputChangeHandler}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Interest (%, per year)</label>
                    <input
                        type="number"
                        id="expected-return"
                        aria-label="expected-return"
                        value={enteredExpectedReturn || ''}
                        onChange={inputChangeHandler}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        type="number"
                        id="duration"
                        aria-label="duration"
                        value={enteredDuration || ''}
                        // value={enteredDuration !== '' ? enteredDuration : ''}
                        onChange={inputChangeHandler}
                    />
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={resetHandler}>
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default InvestmentForm;
