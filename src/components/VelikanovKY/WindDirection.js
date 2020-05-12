 const WindDirection = ({deg}) =>{
    let direction = 'No way';
    if(deg >= 349 || deg < 12)
        direction = 'North';
    else if(deg >= 12 && deg < 34)
        direction = 'North-northeast';
    else if (deg >=34 && deg < 57)
        direction = 'Northeast';
    else if (deg >=57 && deg < 80)
        direction = 'East-northeast';
    else if (deg >= 80 && deg < 102)
        direction = 'East';
    else if (deg >= 102 && deg < 125)
        direction = 'East-southeast';
    else if (deg >= 125 && deg < 147)
        direction = 'Southeast';
    else if (deg >= 147 && deg < 170)
        direction = 'South-southeast';
    else if (deg >= 170 && deg < 192)
        direction = 'South';
    else if (deg >= 192 && deg < 214)
        direction = 'South-southwest';
    else if (deg >= 214 && deg < 237)
        direction = 'Southwest';
    else if (deg >= 237 && deg < 260)
        direction = 'West-southwest';
    else if (deg >= 260 && deg < 282)
        direction = 'West';
    else if (deg >= 282 && deg < 304)
        direction = 'West-northwest';
    else if (deg >=304 && deg < 326)
        direction = 'Northwest';
    else if (deg >= 326 && deg < 349)
        direction = 'Nortn-northwest';
    return(direction)
}
export default WindDirection