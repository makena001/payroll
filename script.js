let form = document.getElementById('myform')
form.addEventListener('submit', function (e) {

        e.preventDefault();
        let basicSalary = Number(document.getElementById('inputbasicsalary').value)
        let benefits = Number(document.getElementById('inputbenefits').value)

        let grossSalary = gross(basicSalary, benefits)
        document.getElementById("grosssal").innerHTML = grossSalary

        let nhif = NHIF(grossSalary)
        document.getElementById('NHIF').innerHTML = nhif

        let nhdf = NHDF(grossSalary)
        document.getElementById('NHDF').innerHTML = nhdf

        let nssf = NSSF(grossSalary)
        document.getElementById('NSSF').innerHTML = nssf

        let payee = PAYEE(grossSalary)
        document.getElementById('PAYEE').innerHTML = payee

        let netPAYY = net(grossSalary, nhif, nhdf, nssf, payee)
        document.getElementById('NETP').innerHTML = netPAYY

})
//net pay
function net(a, b, c, d, e) {
        let netpay = a - (b + c + d + e)
        return netpay
}

//gross
function gross(s, b) {
        let gross = s + b
        return gross
}

//payee
function PAYEE(x) {
        let relief = 2400
        let payee = 0
        if (x >= 0 && x <= 24000) {
                payee = 0
        }
        else if (x > 24000 && x <= 32333) {
                payee = ((x - 24000) * 0.25) + (0.1 * 24000) - relief

        }
        else if (x > 32333 && x <= 500000) {
                payee = (8333 * 0.25) + (0.1 * 24000) + ((x - 32333) * 0.3) - relief
        }
        else if (x > 500000 && x <= 800000) {
                payee = (8333 * 0.25) + (0.1 * 24000) + (467667 * 0.3) - ((inc - 500000) * 0.325) - relief
        }
        else {
                payee = (8333 * 0.25) + (0.1 * 24000) + (8333 * 0.3) - (467667 * 0.325) + (300000 * 0.325) + ((x - 800000) * 0.35) - relief
        }
        return payee
}

//NHIF
function NHIF(a) {
        let nhif = 0
        if (a >= 0 && a < 6000) {
                nhif = 150
        }
        else if (a >= 6000 && a < 8000) {
                nhif = 300
        }
        else if (a >= 8000 && a < 12000) {
                nhif = 400
        }
        else if (a >= 12000 && a < 15000) {
                nhif = 500
        }
        else if (a >= 15000 && a < 20000) {
                nhif = 600
        }
        else if (a >= 20000 && a < 25000) {
                nhif = 750
        }
        else if (a >= 25000 && a < 30000) {
                nhif = 850
        }
        else if (a >= 30000 && a < 35000) {
                nhif = 900
        }
        else if (a >= 35000 && a < 40000) {
                nhif = 950
        }
        else if (a >= 40000 && a < 45000) {
                nhif = 1000
        }
        else if (a >= 45000 && a < 50000) {
                nhif = 1100
        }
        else if (a >= 50000 && a < 60000) {
                nhif = 1200
        }
        else if (a >= 60000 && a < 70000) {
                nhif = 1300
        }
        else if (a >= 70000 && a < 80000) {
                nhif = 1400
        }
        else if (a >= 80000 && a < 90000) {
                nhif = 1500
        }
        else if (a >= 90000 && a < 10000) {
                nhif = 1600
        }
        else {
                nhif = 1700
        }
        return nhif
}

//Kenya NSSF Rate  using 6% of the Gross Salary
function NSSF(t, u = 0.06) {
        let nssf = t * u
        return nssf
}


//NHDF
//NHDF = gross_salary *  0.015
function NHDF(a, b = 0.015) {
        let nhdf = a * b
        return nhdf
}
