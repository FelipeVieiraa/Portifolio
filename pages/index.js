import Link from 'next/link';

function Home(props) {
  console.log("Passando no frontend!!")

  const dynamicDate = new Date();
  const dynamicDateString = dynamicDate.toGMTString();

  return (
    <>
    <div>Felipe Vieira</div>

    <Link href="/sobre">
      <a>Acessar pagina sobre.</a>
    </Link>

    <div>{dynamicDateString} (Dinâmico)</div>
    <div>{props.StaticDateString} (Estático)</div>

  </>
  )


}

export function getStaticProps() {
  console.log("Passando no staticProps")
  const StaticDate = new Date();
  const StaticDateString = StaticDate.toGMTString();

  return{
    props: {
      StaticDateString
    }
  };
}

export default Home;