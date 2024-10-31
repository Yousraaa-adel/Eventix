import MainContainer from '../MainContainer/MainContainer';
import SideLabel from '../SideLabel/SideLabel';
import Features from './Features/Features';
import styles from './WhyUsSection.module.css';

function WhyUsSection() {
  return (
    <MainContainer>
      <section className={styles.whyUs}>
        <SideLabel labelText="Why Us?" />
        <p className={styles.whyUsText}>
          Lorem ipsum dolor sit amet, consecteturA adipiscing elit. Aliquam
          consectetur tristique velit nec tempor. Etiam mattis tincidunt
          placerat. Vestibulum condimentum nulla nulla, id lacinia est
          condimentum sed. Sed eu magna sit amet libero feugiat lobortis sit
          amet sit amet ex. Mauris nec aliquet mi. Duis risus mi, semper in
          mattis sit amet, fringilla eu nulla. fermentum porta non id nunc.
          Maecenas nec tortor et nibh vulputate mollis. Praesent ac pellentesque
          dolor, quis pretium libero. Proin id porta lectus, non lobortis ante.
          Morbi non felis quis metus dapibus pretium. Aenean nec dui sit amet
          metus rhoncus viverra in vel libero.Aenean nec dui sit amet. Praesent
          ac pellentesque dolor, quis pretium libero. Proin id porta lectus, non
          lobortis ante. Morbi non felis quis metus dapibus pretium. Aenean nec
          dui sit amet metus rhoncus viverra in vel libero.Aenean nec dui sit
          amet
        </p>
        <Features />
      </section>
    </MainContainer>
  );
}

export default WhyUsSection;
