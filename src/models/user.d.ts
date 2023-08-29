export interface UserData {
    year: number;
    yearlyInterest: number;
    savingsEndOfYear: number;
    yearlyContribution: number;
}

export interface UserInput {
    currentSavings: number;
    yearlyContribution: number;
    expectedReturn: number;
    duration: number;
};
