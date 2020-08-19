import * as admin from 'firebase-admin'
admin.initializeApp()

const files = {
  onCreateUser: './user',
  onCreateArticleLikedUser: './article/likedUser'
}

const loadFunctions = (filesObj: { [key: string]: string }): void => {
  Object.keys(filesObj).forEach(files => {
    if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME.startsWith(files)) {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      module.exports[files] = require(filesObj[files]).default
    }
  })
}

loadFunctions(files)
