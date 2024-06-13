const boleto = 'regular';

const codigoAcceso = boleto === 'vip' ? 'vip-123-456': 'REGULAR-456-789';
console.log(codigoAcceso);


boleto === 'vip' ? console.log('Tu boleto es de tipo VIP'): console.log('Tu boleto es de tipo REGULAR');