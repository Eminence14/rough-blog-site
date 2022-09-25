const companies = [
    { name: 'Company One', category: 'Finance', start: 1960, end: 2020 },
    { name: 'Company Two', category: 'Sports', start: 1961, end: 2020 },
    { name: 'Company Three', category: 'Entertainment', start: 1962, end: 2022 },
    { name: 'Company Four', category: 'Politics', start: 1963, end: 2023 },
    { name: 'Company Five', category: 'Religion', start: 1964, end: 2031 },
    { name: 'Company Six', category: 'Welfare', start: 1965, end: 2025 },
    { name: 'Company Seven', category: 'Technology', start: 1966, end: 2026 },
    { name: 'Company Eight', category: 'Auto', start: 1967, end: 2033 },
    { name: 'Company Nine', category: 'Retail', start: 1968, end: 2028 },
    { name: 'Company Ten', category: 'Politics', start: 1963, end: 2021 },
    { name: 'Company Eleven', category: 'Religion', start: 1964, end: 2021 },
    { name: 'Company Twelve', category: 'Welfare', start: 1965, end: 2035 },
    { name: 'Company Thirteen', category: 'Technology', start: 1966, end: 2026 },
    { name: 'Company Fourteen', category: 'Auto', start: 1967, end: 2027 },
    { name: 'Company Fifteen', category: 'Retail', start: 1968, end: 2021 },
    { name: 'Company Sixteen', category: 'Trends', start: 1969, end: 2029 },
    { name: 'Company Seventeen', category: 'Auto', start: 1967, end: 2022 },
    { name: 'Company Eighteen', category: 'Retail', start: 1968, end: 2028 },
    { name: 'Company Nineteen', category: 'Politics', start: 1963, end: 2021 },
    { name: 'Company Twenty', category: 'Religion', start: 1964, end: 2024 },
]

const ages = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

// forEach
// companies.forEach((company, index) => {
//     console.log(index, company)
// })


// filter

// const canDrink = ages.filter(age => age >= 18)
// console.log(canDrink)

// const comp = companies.filter(company => company.category.includes('ai'))
// console.log(comp)

// const comp = companies.filter(company => company.category.toLowerCase() === 'retail')
// console.log(comp)

// Companies that more than 60 years
// const lastSixty = companies.filter(comp => (comp.end - comp.start) >= 60)
// console.log(lastSixty)
// const lastSixtyFive = companies.filter(comp => (comp.end - comp.start) >= 65)
// console.log(lastSixtyFive)


// map

// create an array of company names
// const compName = companies.map(comp => comp.name)
// console.log(compName)

// create a company info
// const companyInfo = companies.map(company => `${company.name} into ${company.category}: [${company.start} - ${company.end}]`)
// console.log(companyInfo)

// Square all ages
// const ageSquare = ages.map(age => `Age ${age}: ${age ** 2}`)
// console.log(ageSquare)


// Sort

// Sort the companies by their start year
// const sortByStart = companies.sort((a, b) => a.start > b.start ? -1 : 1)
// const sortByStart = companies.sort((a, b) => a.start - b.start)

// Sort the ages in an descending order
// const ageDescend = ages.sort((age1, age2) => age1 < age2 ? 1 : -1)

// OR (Only for numbers)
// const ageDescend = ages.sort((a,b) => b-a)

// // Sort the companies by categories
// const sortByCategory = companies.sort((a, b) => a.category > b.category ? 1 : -1)
// console.log(sortByCategory)

// Sort by company name in ascending order
// const sortByName = companies.sort((a, b) => a.name > b.name ? 1 : -1)
// console.log(sortByName)



// Reduce

// get the sum of all ages
// const ageSum = ages.reduce((total, age) => total + age)
// console.log(ageSum)

// get the total of the year range for all companies
// const compYear = companies
//     .map(company => company.end - company.start)
//     .reduce((total, diff, index) => total + diff, 0)

// const compYear = companies
//     .reduce((total, company) => total + (company.end - company.start), 0)

// console.log(compYear)



// Combining Methods

