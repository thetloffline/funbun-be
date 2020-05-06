const Rx = require('rxjs')
const RxOp = require('rxjs/operators')
const domain = require('../domain/domain')
let avgTasteScore = -1

function initializeCalculation () {
    domain.feedbackStream.pipe(
        RxOp.map(e => e.taste),
        RxOp.scan(
            (arr, newTaste) => {
                arr.push(newTaste)
                return arr
            }, []
        ),
        RxOp.map( arr => {
           return arr.reduce((acc, current) => acc + Number(current), 0) / arr.length
        })
    ).subscribe(score => {
        avgTasteScore = score
        console.log('avgTasteScore ', avgTasteScore)
    })
}

module.exports = { 
    avgTasteScore : avgTasteScore,
    initializeCalculation: initializeCalculation
}