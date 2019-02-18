import StatelessElement from './StatelessElement';

export default class SchibstedHeader extends StatelessElement {
  constructor() {
    super('header', 'schibsted-header', '<p>Schibsted REST framework <span>v3.1.1</span></p>');
  }
}
