import styled from "styled-components";
import { useState } from "react";
const Input_ = styled.input`
  box-sizing: border-box;
  margin: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: "tnum";
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: #000000d9;
  font-size: 14px;
  line-height: 1.5715;
  background-color: #fff;
  background-image: none;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  outline: none;
`;

const Label = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  max-width: 100%;
  height: 32px;
  color: #000000d9;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-align: right;
  vertical-align: middle;
  &::after {
    content: ":";
    position: relative;
    top: -0.5px;
    margin: 0 8px 0 2px;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  box-sizing: border-box;
  margin: 0 0 24px;
  padding: 0;
  color: #000000d9;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5715;
  list-style: none;
  font-feature-settings: "tnum";
  vertical-align: top;
  .item-width {
    display: block;
    flex: 0 0 33.33333333%;
    max-width: 33.33333333%;
    text-align: right;
  }
`;

export const Input = ({ label, name, initialValue, onChange, ...props }) => {
  const [value, setValue] = useState(initialValue ?? "");
  const handleChange = (e) => {
    setValue(e.target.value);
    onChange?.(e);
  };
  return (
    <ItemContainer>
      <div className="item-width">
        <Label htmlFor={`${label}-label`}>{label}</Label>
      </div>
      <div className="item-width">
        <Input_
          id={`${label}-label`}
          value={value}
          onChange={handleChange}
          name={name}
          type="text"
          {...props}
        />
      </div>
    </ItemContainer>
  );
};
