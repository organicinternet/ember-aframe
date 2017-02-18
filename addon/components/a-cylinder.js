import AEntity from './a-entity';

export default AEntity.extend({
  tagName: 'a-cylinder',
  attributeBindings: [
    'radius',
    'height',
    'color'
  ]
});
