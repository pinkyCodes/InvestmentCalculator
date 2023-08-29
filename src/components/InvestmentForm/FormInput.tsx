import classes from './InvestmentForm.module.css';

interface FormInputProps {
    currentSavings: number;
    yearlyContribution: number;
    expectedReturn: number;
    duration: number;
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onReset: () => void;
    onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = (props: FormInputProps): JSX.Element => {
    return (
        <form className={classes.form} onSubmit={props.onSubmit}>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        type="number"
                        id="current-savings"
                        aria-label="current-savings"
                        value={props.currentSavings || ''}
                        onChange={props.onInputChange}
                    // onChange={(event) => inputChangeHandler("current-savings", event.target.value)}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input
                        type="number"
                        id="yearly-contribution"
                        aria-label="yearly-contribution"
                        value={props.yearlyContribution || ''}
                        onChange={props.onInputChange}
                    />
                </p>
            </div>
            <div className={classes['input-group']}>
                <p>
                    <label htmlFor="expected-return">Expected Interest (%, per year)</label>
                    <input
                        type="number"
                        id="expected-return"
                        aria-label="expected-return"
                        value={props.expectedReturn || ''}
                        onChange={props.onInputChange}
                    />
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input
                        type="number"
                        id="duration"
                        aria-label="duration"
                        value={props.duration || ''}
                        // value={enteredDuration !== '' ? enteredDuration : ''}
                        onChange={props.onInputChange}
                    />
                </p>
            </div>
            <p className={classes.actions}>
                <button type="reset" className={classes.buttonAlt} onClick={props.onReset}>
                    Reset
                </button>
                <button type="submit" className={classes.button}>
                    Calculate
                </button>
            </p>
        </form>
    );
};

export default FormInput;