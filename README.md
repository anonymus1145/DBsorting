# DBsorting

This is a sample project for demonstrating the usage of the merge sort algorithm in TypeScript.

#### Table of Contents
#### Introduction
#### Features
#### Getting Started
#### Usage
#### Contributing
#### License


## Introduction

This project showcases the implementation of the merge sort algorithm in TypeScript. Merge sort is a popular sorting algorithm that follows the divide-and-conquer approach. It works by recursively dividing the input array into smaller subarrays, sorting them, and then merging them back together to obtain a sorted array.

## Features

Implementation of the merge sort algorithm in TypeScript
Sorting an array of numbers in ascending order

## Getting Started

To get started with this project, follow these steps:

Clone the repository:


Copied! ✅
📝 Copy Code

➕ Insert in Terminal
$ git clone https://github.com/your-username/your-project.git
Install the dependencies:


Copied! ✅
📝 Copy Code

➕ Insert in Terminal
$ npm install

## Usage

To use the merge sort algorithm in your project, follow these steps:

Import the mergeSort function from algo2.ts:


Copied! ✅
📝 Copy Code

 ➕ Insert Code
import { mergeSort } from './algo2';

// or

const { mergeSort } = require('./algo2');
Use the mergeSort function to sort an array:


Copied! ✅
📝 Copy Code

 ➕ Insert Code
const arr = [5, 2, 8, 3, 1];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 5, 8]

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue.

## License
This project is licensed under the MIT License.