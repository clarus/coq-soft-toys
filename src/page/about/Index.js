// @flow
import React, {PureComponent} from "react";

type Props = {};

export default class About extends PureComponent<Props> {
  render() {
    return (
      <>
        <div className="content">
          <h1>About</h1>
          <p>
            <strong>Coq</strong> is the French name for "rooster".
          </p>
          <blockquote>
            <p>
              A rooster, also known as a cockerel or cock, is a male
              gallinaceous bird, with cockerel being younger and rooster being
              an adult male chicken (Gallus gallus domesticus).
            </p>
            <p>
              The term "rooster" originated in the United States as a puritan
              euphemism to avoid the sexual connotation of the original English
              "cock", and is widely used throughout North America. "Roosting" is
              the action of perching aloft to sleep at night, which is done by
              both sexes.
            </p>
            <p>
              The cockerel was already of symbolic importance in Gaul at the
              time of the invasion of Julius Caesar and was associated with the
              god Lugus. Today the Gallic rooster is an emblem of France. The
              rooster is also an emblem of Wallonia and the Turkish city of
              Denizli. Among Roman deities, Priapus was sometimes represented as
              a cock, with its beak as a phallus and its wattles as testicles.
              The cock or a man with rooster attributes was similarly used as an
              erotic symbol, Priapus Gallinaceus The Cockburn clan in Scotland
              use the cock as their badge. Their canting coat-of-arms is Argent
              three cocks gules, and their motto is ACCENDIT CANTU (Latin: He
              rouses us with song).
            </p>
            <footer>
              Wikipedia,{" "}
              <cite>
                <a href="https://en.wikipedia.org/wiki/Rooster">
                  <i>Rooster</i>
                </a>
              </cite>
            </footer>
          </blockquote>
        </div>
      </>
    );
  }
}
