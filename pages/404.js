import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <h1>404 - Custom Not Found Page </h1>
      <Link href="/">
        <button>Go home</button>
      </Link>
      <style jsx>
        {`
          div {
            width: 100%;
            height: 99vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>
    </div>
  );
}
