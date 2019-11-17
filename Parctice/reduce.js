const data = configArray.reduce((arr, id) => {
      if (!filter[id])
        arr.push({
          id: id,
          config: config[id],
          rate: rates[id]
        });
      return arr;
    }, []);