let log4js = require('log4js');
let logger = log4js.getLogger();
module.exports = function convert(startYear)
{
  if(isNaN(startYear))
{
        throw new Error('Not a number');
}
else
{
const readline = require('readline');
const fs = require('fs');
let data = [];
let i = 0;
let a = [];
let ageGroup = 0;
let literatePerson = 0;
let cleanedLine = [];

let rl = readline.createInterface({
  /* CSV file */
input: fs.createReadStream('../inputdata/final.csv')
                                         });
rl.on('line', (line) => {
        cleanedLine = line.split(',');
        if(i === 0)
				{
            /* To clean junk files */
            cleanedLine = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            data = cleanedLine;
            ageGroup = data.indexOf('Age-group');
            literatePerson = data.indexOf('Literate - Persons');
            i = i + 1;
				}

    data = line.split(',');
    a.push({agegroup: data[ageGroup], literateperson: data[literatePerson]});
    logger.debug(a);
});


rl.on('close', (line) => {
        cleanedLine = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
       /* To write a output */
        fs.writeFile('../outputdata/outputIndiaCensusPriyanka.json', JSON.stringify(a));
        logger.debug('File Closed');
});

return 'JSON written successfully';
}
}
;
