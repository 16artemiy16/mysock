global.expectStyles = (node, styles) => {
  Object
    .entries(styles)
    .forEach(([property, value]) => {
      expect(node).toHaveStyleRule(property, value);
    });
}
