exports.getInfo = (entity) => {
  return {
    nickName: entity.nickName,
    image: entity.image ? entity.image : null
  }
}
