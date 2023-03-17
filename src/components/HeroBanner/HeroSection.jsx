import { Banner, List, Item, Image } from './HeroSaction.styled';
import {
  RadioWraper,
  FormControl,
  RadioGroup,
  ControlLabels,
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
          <FormControl>
            <RadioGroup value={values.bloodType} name="bloodType" row>
              <ControlLabels
                value="1"
                label="1"
                onChange={handleChange}
                checked={values.bloodType === '1'}
              />
              <ControlLabels
                value="2"
                label="2"
                onChange={handleChange}
                checked={values.bloodType === '2'}
              />
              <ControlLabels
                value="3"
                label="3"
                onChange={handleChange}
                checked={values.bloodType === '3'}
              />
            </RadioGroup>
          </FormControl>
        </RadioWraper>
      </Banner>
    </>
  );
};
