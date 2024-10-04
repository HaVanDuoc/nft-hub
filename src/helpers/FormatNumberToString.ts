const FormatNumberToString = (num: number) => {
    return num.toString().padStart(2, '0') + '.';
}

export default FormatNumberToString