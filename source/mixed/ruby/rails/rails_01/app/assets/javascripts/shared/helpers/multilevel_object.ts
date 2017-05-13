// const arrayKeysToString = function(keys: Array<string>) {
//   return keys.map(key => {
//     return `["${key.escapeDoubleQuotes()}"]`
//   }).join('');
// };
//
// const exists = function(object: Object, keys: Array<string>) {
//   try {
//     if (object == null || keys == null) {
//       return false;
//     }
//
//     get(object, keys);
//
//     return true;
//   } catch (error) {
//     return false;
//   }
// };
//
// const get = function(object: Object, keys: Array<string>) {
//   if (object == null || keys == null) {
//     return;
//   }
//   const keysString = arrayKeysToString(keys);
//
//   let finalKey = keysString;
//   if (keysString == null) {
//     finalKey = '';
//   } else if (!keysString.startsWith('[')) {
//     finalKey = `.${finalKey}`;
//   }
//
//   return eval(`object${finalKey}`);
// };

const set = function(object: Object, keys: Array<string>, value: any) {
  if (object == null || keys == null) {
    return;
  }

  let keysLength = keys.length;

  if (keysLength == 0) {
    return;
  } else {
    let firstKey = keys[0];
    let firstValue = object[firstKey];

    if (firstValue == null) {
      object[firstKey] = {};
    } else if (typeof firstValue === 'string') {
      delete object[firstKey];
      object[firstKey] = {};
    }

    if (keysLength == 1) {
      object[firstKey] = value;

      return;
    } else {
      set(object[firstKey], keys.slice(1, keysLength), value);
    }
  }
};

export default class MultilevelObject {

  protected object: any;

  public get(keys: Array<string>): any {
    if (keys == null) {
      return;
    }
    const keysString = this.arrayKeysToString(keys);

    let finalKey = keysString;
    if (keysString == null) {
      finalKey = '';
    } else if (!keysString.startsWith('[')) {
      finalKey = `.${finalKey}`;
    }

    return eval(`this.object${finalKey}`);
  }

  public exists(keys: Array<string>): boolean {
    try {
      if (keys == null) {
        return false;
      }

      this.get(keys);

      return true;
    } catch (error) {
      return false;
    }
  }

  public set(keys: Array<string>, value: any) {
    set(this.object, keys, value);
  }

  public arrayKeysToString(keys: Array<string>) {
    return keys.map(key => {
      return `["${key.escapeDoubleQuotes()}"]`
    }).join('');
  };
}