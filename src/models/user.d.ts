export interface UserData {
    year: number;
    yearlyInterest: number;
    savingsEndOfYear: number;
    yearlyContribution: number;
}

export interface UserInput {
    'current-savings': number;
    'yearly-contribution': number;
    'expected-return': number;
    'duration': number;
};
