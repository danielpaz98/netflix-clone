import { useCallback, useRef, useState } from "react";
// STYLES
import Styles from "./styles.css";
// ICONS
import XMarkIcon from "~/icons/xmark.svg";

type ExcludedProps = "ref" | "type" | "autoFocus";
type Props = Omit<React.ComponentProps<"input">, ExcludedProps>;

const ExpandableSearchBar = ({ className, value = "", onChange, ...restProps }: Props) => {
  const [showSearcher, setShowSearcher] = useState(false);
  const [search, setSearch] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleOnChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchValue = e.target.value;

      setSearch(searchValue);
      onChange?.(e);
    },
    [onChange]
  );

  const handleOnBlur = useCallback(() => {
    if (!search) setShowSearcher(false);
  }, [search]);

  const handleOnClear = useCallback(() => {
    setSearch("");
    inputRef.current?.focus();
  }, []);

  return (
    <Styles.SearchBox className={className}>
      {!showSearcher && (
        <Styles.SearchTab
          aria-label="Search"
          className="searchTab"
          tabIndex={0}
          type="button"
          onClick={() => setShowSearcher(true)}>
          <Styles.SearchIcon />
        </Styles.SearchTab>
      )}

      {showSearcher && (
        <Styles.SearchInput onBlur={handleOnBlur}>
          <Styles.SearchIcon className="pointer-events-none" css={{ margin: "0 6px" }} />

          <Styles.Input
            {...restProps}
            ref={inputRef}
            autoFocus
            type="text"
            value={search}
            onChange={handleOnChange}
          />

          <Styles.ClearButton
            aria-label="Clear input"
            css={!search && { visibility: "hidden" }}
            tabIndex={0}
            type="button"
            onClick={handleOnClear}>
            <XMarkIcon />
          </Styles.ClearButton>
        </Styles.SearchInput>
      )}
    </Styles.SearchBox>
  );
};

export default ExpandableSearchBar;
