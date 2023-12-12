import style from "./index.module.css";

type Props = {
  title: string;
  body: string;
  href: string;
};

export const CardAsReact = ({ title, body, href }: Props) => (
  <li class={style.linkCard}>
    <a href={href}>
      <h2>
        {title}
        <span>&rarr;</span>
      </h2>
      <p>{body}</p>
    </a>
  </li>
);
