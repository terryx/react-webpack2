function testTreeShaking(str) {
  if (str) {
    return str;
  } else {
    return 'abc';
  }
}

export default testTreeShaking;
