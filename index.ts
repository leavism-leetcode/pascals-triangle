function generate(numRows: number): number[][] {
    let result: number[][] = [];
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
        let currentRow: number[] = [];
        currentRow[0] = 1;
        currentRow[rowIndex] = 1;

        for (let columnIndex = 1; columnIndex < rowIndex; columnIndex++) {
            currentRow[columnIndex] = result[rowIndex-1][columnIndex-1] + result[rowIndex-1][columnIndex];
        }
        result[rowIndex] = currentRow;
    }
    return result;
};