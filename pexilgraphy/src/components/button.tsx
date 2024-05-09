import Link from "next/link";
interface buttonType {
  primary?: boolean;
  navigation?: boolean;
  href: string;
  text: string;
}
export default function Button(props: buttonType) {
  if (props.primary) {
    return (
      <div>
        <Link
          href={props.href}
          className="bg-[#007fff] font-bold px-4 rounded-md py-2 text-white text-center transition ease-in-out hover:bg-[#46a2fd] duration-300"
        >
          {props.text}
        </Link>
      </div>
    );
  } else if (props.navigation) {
    return (
      <div>
        <Link
          href={props.href}
          className="border-[#888888] border-2 font-bold px-4 rounded-md py-2 text-center text-green-600 transition ease-in-out hover:border-[#0593a2]/50 duration-300"
        >
          {props.text}
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <Link
          href={props.href}
          className="border-[#0593a2] border-2 font-bold px-4 rounded-md py-2 text-center transition ease-in-out hover:border-[#0593a2]/50 duration-300"
        >
          {props.text}
        </Link>
      </div>
    );
  }
}
