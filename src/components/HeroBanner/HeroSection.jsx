import { Banner, List, Item, Image } from './HeroSaction.styled';
import {
  RadioWraper,
  RadioButtonsDiv,
  FormCtrl,
  LabelsCtrl,
  UInput,
  Sp,
} from './HeroSaction.styled';
import { Container } from './HeroSaction.styled';
import Images from './Images.json';

export const HeroBanner = () => {
  return (
    <>
      <Banner>
        <Container>
          <List>
            {Images.map(image => (
              <Item key={image.id}>
                <Image
                  src={process.env.PUBLIC_URL + image.icon}
                  alt={image.description}
                />
              </Item>
            ))}
          </List>
        </Container>
        <RadioWraper>
          <FormCtrl>
            <RadioButtonsDiv>
              <LabelsCtrl>
                <UInput type="radio" checked id="one" name="scrole" value="" />
                <Sp htmlFor="one"></Sp>
              </LabelsCtrl>
              <LabelsCtrl>
                <UInput type="radio" id="two" name="scrole" value="" />
                <Sp htmlFor="two"></Sp>
              </LabelsCtrl>
              <LabelsCtrl>
                <UInput type="radio" id="three" name="scrole" value="" />
                <Sp htmlFor="thee"></Sp>
              </LabelsCtrl>
            </RadioButtonsDiv>
          </FormCtrl>
        </RadioWraper>
      </Banner>
    </>
  );
};
