export const BasicTypes = () => {

  const name: string = 'Fernando';
  const age: number = 38;
  const isActive: boolean = true;

  const powers: string[] = ['React', 'ReactNative', 'Astro'];

  return (
    <>
      <h3>Tipos basicos</h3>

      {name} - {age} - {isActive ? 'Activo' : 'No Activo'}

      <p>
        {powers.join(', ')}
      </p>
    </>
  )
}