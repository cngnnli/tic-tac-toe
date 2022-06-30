import React, { useState } from 'react';
import './Tictactoe.css';
const Tictactoe = () => {
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState('');
	const [ cl, setcl ] = useState(Array(9).fill('normal'));
	let combos = {
		across: [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
		],
		down: [
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
		],
		diagonal: [
			[0, 4, 8],
			[2, 4, 6],
		],
	};
	const checkForWinner = (squares) => {
		for (let combo in combos) {
			combos[combo].forEach((item) => {
				if (
					squares[item[0]] === '' ||
					squares[item[1]] === '' ||
					squares[item[2]] === ''
				) {
					// do nothing
				} else if (
					squares[item[0]] === squares[item[1]] && 
					squares[item[1]] === squares[item[2]]
				) {
					setWinner(squares[item[0]]);
				}
			});
		}
	};
	let squs = [...cl];
	const handleClick = (num) => {
		if (winner === ''){
			let squares = [...cells];
			if (cells[num] === '') {
				squares[num] = 'x';
				squs[num] = 'normal' + ' xli';
			} else if (cells[num] === 'x') {
				squares[num] = 'o';
				squs[num] = 'normal' + ' olu';
			} else {
				squares[num] = '';
				squs[num] = 'normal';
			}
			for (let combo in combos) {
				combos[combo].forEach((item) => {
					if (
						squs[item[0]] === 'normal' ||
						squs[item[1]] === 'normal' ||
						squs[item[2]] === 'normal'
					) {
						// do nothing
					} else if (
						squs[item[0]] === squs[item[1]] && 
						squs[item[1]] === squs[item[2]] &&
						squares[item[0]] === 'x'
						
					) {
						squs[item[0]] = 'normal' + ' xli' + ' winnerx';
						squs[item[1]] = 'normal' + ' xli' + ' winnerx';
						squs[item[2]] = 'normal' + ' xli' + ' winnerx';
	
					} else if (
						squs[item[0]] === squs[item[1]] && 
						squs[item[1]] === squs[item[2]] &&
						squares[item[0]] === 'o'
					) {
						squs[item[0]] = 'normal' + ' olu' + ' winnero';
						squs[item[1]] = 'normal' + ' olu' + ' winnero';
						squs[item[2]] = 'normal' + ' olu' + ' winnero';
					}
				});
			}
			checkForWinner(squares);
			setCells(squares);	
			setcl(squs);	
		} else {
				setWinner('');
				setCells(Array(9).fill(''));
				setcl(Array(9).fill('normal'));
		}
	};
	return (
		<div className='container'>
			<p>GAME TIME</p>
			<div className={cl[0]} id='el0' onClick={() => handleClick(0)}>{cells[0]}</div>
			<div className={cl[1]} id='el1' onClick={() => handleClick(1)}>{cells[1]}</div>
			<div className={cl[2]} id='el2' onClick={() => handleClick(2)}>{cells[2]}</div>
			<div className={cl[3]} id='el3' onClick={() => handleClick(3)}>{cells[3]}</div>
			<div className={cl[4]} id='el4' onClick={() => handleClick(4)}>{cells[4]}</div>
			<div className={cl[5]} id='el5' onClick={() => handleClick(5)}>{cells[5]}</div>
			<div className={cl[6]} id='el6' onClick={() => handleClick(6)}>{cells[6]}</div>
			<div className={cl[7]} id='el7' onClick={() => handleClick(7)}>{cells[7]}</div>
			<div className={cl[8]} id='el8' onClick={() => handleClick(8)}>{cells[8]}</div>		
		</div>
	);
};
export default Tictactoe;