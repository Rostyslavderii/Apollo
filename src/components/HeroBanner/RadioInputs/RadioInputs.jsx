import {
  RadioWraper,
  RadioButtonsDiv,
  FormCtrl,
  LabelsCtrl,
  UInput,
  Sp,
} from '../HeroSaction.styled';

export const RadioInputs = (setSlideIndex, index) => {
  const moveInput = index => {
    setSlideIndex(index);
  };
  return (
    <>
      <RadioWraper>
        <FormCtrl>
          <RadioButtonsDiv>
            <LabelsCtrl>
              <UInput
                type="radio"
                onClick={() => moveInput(index + 1)}
                checked
                id="one"
                name="scrole"
                value=""
              />
              <Sp htmlFor="one"></Sp>
            </LabelsCtrl>
            <LabelsCtrl>
              <UInput
                type="radio"
                // onChange={this.HandleCheckBox}
                id="two"
                name="scrole"
                value=""
              />
              <Sp htmlFor="two"></Sp>
            </LabelsCtrl>
            <LabelsCtrl>
              <UInput
                type="radio"
                // onChange={this.HandleCheckBox}
                id="three"
                name="scrole"
                value=""
              />
              <Sp htmlFor="three"></Sp>
            </LabelsCtrl>
          </RadioButtonsDiv>
        </FormCtrl>
      </RadioWraper>
    </>
  );
};
