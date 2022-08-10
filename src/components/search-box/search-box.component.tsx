import { ChangeEvent } from "react";
import "./search-box.styles.css";

// const name: string = "123";

// const func: (a: string, b: number, c: boolean) => boolean = (a,b,c) => {return true};

// INTERFACE TYPE (we're using types)
// interface ISearchBoxProps extends IChangeHandlerProps {
//   className: string;
//   placeholder?: string | null;

// }

// interface IChangeHandlerProps {
//   onChangedHandler: (a: string) => void
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  value: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ className, placeholder, value, onChangeHandler } : SearchBoxProps) => {
  return (
    <div> 
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
