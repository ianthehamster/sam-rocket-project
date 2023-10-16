export function Introduce(props) {
  let { age, height, weight } = props;

  return (
    <div>
      {age && height && weight ? (
        <h4>
          Hello, I am {age} years old, I weigh {weight}kg and I am {height}cm
          tall!
        </h4>
      ) : (
        <div>Please insert all props</div>
      )}
    </div>
  );
}
