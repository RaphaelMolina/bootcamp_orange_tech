// import { useState, useEffect, useMemo, useCallback } from 'react';

// //useMemo = Salva referencia de variável(const, var, ,et).
// //useCallback = Salva referencia de função.
// const Teste = () => {
//     const [age, setAge] = useState(32);
//     const [name, setName] = useState('Raphael');

//     const handleChangeName = useCallback(() => {
//         console.log('Alterou o nome!');
//         setName(prev => prev === 'Raphael' ? 'Raphael Molina' : 'Raphael');
//     }, []);

//     const handleChangeAge = useCallback(() => {
//         const newAge = 10 * age;
//         console.log('Age atual', age, newAge);
//         setAge(prev => prev === 32 ? 33 : 32);
//     }, [age]);

//     // const calculo = useMemo(()=>{
//     //     console.log('Calculou!!!', age);
//     //     return 10 * age;
//     // }, [age]);
//     // console.log('Renderizou!!!', calculo);

//     // useEffect(() => {
//     //     // handleChangeName();
//     //     alert('Renderizei')
//     // }, [age]);

//     return (
//         <div>
//             <p>Idade: {age}</p>
//             <p>Nome: {name}</p><br />
//             <button onClick={handleChangeName}>Alterar Nome</button><br /><br />
//             <button onClick={handleChangeAge}>Alterar Idade</button>
//         </div>
//     );
// };

// export { Teste };