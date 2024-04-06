const sampleData = [
    {
        id: 'product-1',
        title: 'Product 1',
        description: '<div><h1>Welcome to Our Website</h1><p>This is a sample description of our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi euismod, finibus eros id, mollis ex. Donec sit amet dolor ac nisi pharetra hendrerit. Duis eget augue vitae dui laoreet eleifend. Sed ac libero sit amet ipsum tempor cursus nec eu velit. Mauris posuere magna vel urna faucibus, eu pretium mauris fringilla. Sed tincidunt massa nec elit lacinia, sed placerat ex tincidunt. In hac habitasse platea dictumst. Nullam tincidunt elit at magna congue efficitur. Sed nec mi in justo hendrerit sollicitudin non eu dui. Cras consequat eros nec libero volutpat eleifend. Integer convallis nec mi eget faucibus. Vestibulum vehicula mi non nulla viverra sodales.</p></div>',
        tags: ['React', 'For Business'],
        imageArray: [
            'https://jooinn.com/images/lonely-tree-reflection-3.jpg',
            'https://wallpapercave.com/wp/wp2356022.png',
            'https://th.bing.com/th/id/R.9f4afcb812413da17d55d5c92bd5d26d?rik=TK1g4DTU6kbK7Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-GOZUQ7w3338%2fT1_RsoYwMtI%2fAAAAAAAAEvU%2f4GXC4EAt1qY%2fs1600%2fHigh_Definition_Wallpaper_003.jpg&ehk=jLlRUfYIT0uJFLXn34HTWurF1uHOQluqt1FYLN7CyVE%3d&risl=&pid=ImgRaw&r=0',
            'https://th.bing.com/th/id/R.38a45f948b46fb91610374867fa4b144?rik=oVzavJMnvojjfg&riu=http%3a%2f%2fwww.wallpapers-full-hd.com%2fbackgrounds%2fdandelion-picture.jpg&ehk=DUB%2f6nZOJJvxT5PcM4STX9akamcj2xW2tZl5XbONUwQ%3d&risl=&pid=ImgRaw&r=0',
        ],
        price: 30000,
        discountedPrice: 26000,
        dateAdded: '2024-02-01',
        shortDescription: 'Lorem ipsum dolor sit amet'
    },
    {
        id: 'product-2',
        title: 'Product 2',
        description: '<div><h1>Welcome to Our Website</h1><p>This is a sample description of our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi euismod, finibus eros id, mollis ex. Donec sit amet dolor ac nisi pharetra hendrerit. Duis eget augue vitae dui laoreet eleifend. Sed ac libero sit amet ipsum tempor cursus nec eu velit. Mauris posuere magna vel urna faucibus, eu pretium mauris fringilla. Sed tincidunt massa nec elit lacinia, sed placerat ex tincidunt. In hac habitasse platea dictumst. Nullam tincidunt elit at magna congue efficitur. Sed nec mi in justo hendrerit sollicitudin non eu dui. Cras consequat eros nec libero volutpat eleifend. Integer convallis nec mi eget faucibus. Vestibulum vehicula mi non nulla viverra sodales.</p></div>',
        tags: ['NodeJS', 'For Business'],
        imageArray: [
            'https://th.bing.com/th/id/R.9f4afcb812413da17d55d5c92bd5d26d?rik=TK1g4DTU6kbK7Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-GOZUQ7w3338%2fT1_RsoYwMtI%2fAAAAAAAAEvU%2f4GXC4EAt1qY%2fs1600%2fHigh_Definition_Wallpaper_003.jpg&ehk=jLlRUfYIT0uJFLXn34HTWurF1uHOQluqt1FYLN7CyVE%3d&risl=&pid=ImgRaw&r=0',
            'https://th.bing.com/th/id/R.38a45f948b46fb91610374867fa4b144?rik=oVzavJMnvojjfg&riu=http%3a%2f%2fwww.wallpapers-full-hd.com%2fbackgrounds%2fdandelion-picture.jpg&ehk=DUB%2f6nZOJJvxT5PcM4STX9akamcj2xW2tZl5XbONUwQ%3d&risl=&pid=ImgRaw&r=0',
            'https://wallpapercave.com/wp/wp2356022.png',
            'https://jooinn.com/images/lonely-tree-reflection-3.jpg',
        ],
        price: 40000,
        discountedPrice: 30000,
        dateAdded: '2024-01-01',
        shortDescription: 'Lorem ipsum dolor sit amet'
    },
    {
        id: 'product-3',
        title: 'Product 3',
        description: '<div><h1>Welcome to Our Website</h1><p>This is a sample description of our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi euismod, finibus eros id, mollis ex. Donec sit amet dolor ac nisi pharetra hendrerit. Duis eget augue vitae dui laoreet eleifend. Sed ac libero sit amet ipsum tempor cursus nec eu velit. Mauris posuere magna vel urna faucibus, eu pretium mauris fringilla. Sed tincidunt massa nec elit lacinia, sed placerat ex tincidunt. In hac habitasse platea dictumst. Nullam tincidunt elit at magna congue efficitur. Sed nec mi in justo hendrerit sollicitudin non eu dui. Cras consequat eros nec libero volutpat eleifend. Integer convallis nec mi eget faucibus. Vestibulum vehicula mi non nulla viverra sodales.</p></div>',
        tags: ['SALE', 'ReactJS'],
        imageArray: [
            'https://jooinn.com/images/lonely-tree-reflection-3.jpg',
            'https://th.bing.com/th/id/R.38a45f948b46fb91610374867fa4b144?rik=oVzavJMnvojjfg&riu=http%3a%2f%2fwww.wallpapers-full-hd.com%2fbackgrounds%2fdandelion-picture.jpg&ehk=DUB%2f6nZOJJvxT5PcM4STX9akamcj2xW2tZl5XbONUwQ%3d&risl=&pid=ImgRaw&r=0',
            'https://wallpapercave.com/wp/wp2356022.png',
            'https://th.bing.com/th/id/R.9f4afcb812413da17d55d5c92bd5d26d?rik=TK1g4DTU6kbK7Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-GOZUQ7w3338%2fT1_RsoYwMtI%2fAAAAAAAAEvU%2f4GXC4EAt1qY%2fs1600%2fHigh_Definition_Wallpaper_003.jpg&ehk=jLlRUfYIT0uJFLXn34HTWurF1uHOQluqt1FYLN7CyVE%3d&risl=&pid=ImgRaw&r=0',
        ],
        price: 12000,
        discountedPrice: 8000,
        dateAdded: '2023-04-01',
        shortDescription: 'Lorem ipsum dolor sit amet'
    },
    {
        id: 'product-4',
        title: 'Product 4',
        description: '<div><h1>Welcome to Our Website</h1><p>This is a sample description of our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi euismod, finibus eros id, mollis ex. Donec sit amet dolor ac nisi pharetra hendrerit. Duis eget augue vitae dui laoreet eleifend. Sed ac libero sit amet ipsum tempor cursus nec eu velit. Mauris posuere magna vel urna faucibus, eu pretium mauris fringilla. Sed tincidunt massa nec elit lacinia, sed placerat ex tincidunt. In hac habitasse platea dictumst. Nullam tincidunt elit at magna congue efficitur. Sed nec mi in justo hendrerit sollicitudin non eu dui. Cras consequat eros nec libero volutpat eleifend. Integer convallis nec mi eget faucibus. Vestibulum vehicula mi non nulla viverra sodales.</p></div>',
        tags: ['PHP', 'School Activity'],
        imageArray: [
            'https://th.bing.com/th/id/R.38a45f948b46fb91610374867fa4b144?rik=oVzavJMnvojjfg&riu=http%3a%2f%2fwww.wallpapers-full-hd.com%2fbackgrounds%2fdandelion-picture.jpg&ehk=DUB%2f6nZOJJvxT5PcM4STX9akamcj2xW2tZl5XbONUwQ%3d&risl=&pid=ImgRaw&r=0',
            'https://jooinn.com/images/lonely-tree-reflection-3.jpg',
            'https://th.bing.com/th/id/R.9f4afcb812413da17d55d5c92bd5d26d?rik=TK1g4DTU6kbK7Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-GOZUQ7w3338%2fT1_RsoYwMtI%2fAAAAAAAAEvU%2f4GXC4EAt1qY%2fs1600%2fHigh_Definition_Wallpaper_003.jpg&ehk=jLlRUfYIT0uJFLXn34HTWurF1uHOQluqt1FYLN7CyVE%3d&risl=&pid=ImgRaw&r=0',
            'https://wallpapercave.com/wp/wp2356022.png',
        ],
        price: 14000,
        discountedPrice: 0,
        dateAdded: '2022-01-01',
        shortDescription: 'Lorem ipsum dolor sit amet'
    },
    {
        id: 'product-5',
        title: 'Product 5',
        description: '<div><h1>Welcome to Our Website</h1><p>This is a sample description of our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi euismod, finibus eros id, mollis ex. Donec sit amet dolor ac nisi pharetra hendrerit. Duis eget augue vitae dui laoreet eleifend. Sed ac libero sit amet ipsum tempor cursus nec eu velit. Mauris posuere magna vel urna faucibus, eu pretium mauris fringilla. Sed tincidunt massa nec elit lacinia, sed placerat ex tincidunt. In hac habitasse platea dictumst. Nullam tincidunt elit at magna congue efficitur. Sed nec mi in justo hendrerit sollicitudin non eu dui. Cras consequat eros nec libero volutpat eleifend. Integer convallis nec mi eget faucibus. Vestibulum vehicula mi non nulla viverra sodales.</p></div>',
        tags: ['SALE', 'PHP', 'For Students', 'School Activity'],
        imageArray: [
            'https://th.bing.com/th/id/R.9f4afcb812413da17d55d5c92bd5d26d?rik=TK1g4DTU6kbK7Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-GOZUQ7w3338%2fT1_RsoYwMtI%2fAAAAAAAAEvU%2f4GXC4EAt1qY%2fs1600%2fHigh_Definition_Wallpaper_003.jpg&ehk=jLlRUfYIT0uJFLXn34HTWurF1uHOQluqt1FYLN7CyVE%3d&risl=&pid=ImgRaw&r=0',
            'https://th.bing.com/th/id/R.38a45f948b46fb91610374867fa4b144?rik=oVzavJMnvojjfg&riu=http%3a%2f%2fwww.wallpapers-full-hd.com%2fbackgrounds%2fdandelion-picture.jpg&ehk=DUB%2f6nZOJJvxT5PcM4STX9akamcj2xW2tZl5XbONUwQ%3d&risl=&pid=ImgRaw&r=0',
            'https://jooinn.com/images/lonely-tree-reflection-3.jpg',
            'https://wallpapercave.com/wp/wp2356022.png',
        ],
        price: 15000,
        discountedPrice: 9500,
        dateAdded: '2024-02-01',
        shortDescription: 'Lorem ipsum dolor sit amet'
    },
    {
        id: 'product-6',
        title: 'Product 6',
        description: '<div><h1>Welcome to Our Website</h1><p>This is a sample description of our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi euismod, finibus eros id, mollis ex. Donec sit amet dolor ac nisi pharetra hendrerit. Duis eget augue vitae dui laoreet eleifend. Sed ac libero sit amet ipsum tempor cursus nec eu velit. Mauris posuere magna vel urna faucibus, eu pretium mauris fringilla. Sed tincidunt massa nec elit lacinia, sed placerat ex tincidunt. In hac habitasse platea dictumst. Nullam tincidunt elit at magna congue efficitur. Sed nec mi in justo hendrerit sollicitudin non eu dui. Cras consequat eros nec libero volutpat eleifend. Integer convallis nec mi eget faucibus. Vestibulum vehicula mi non nulla viverra sodales.</p></div>',
        tags: ['PHP', 'School Project', 'Custom Software'],
        imageArray: [
            'https://th.bing.com/th/id/R.9f4afcb812413da17d55d5c92bd5d26d?rik=TK1g4DTU6kbK7Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-GOZUQ7w3338%2fT1_RsoYwMtI%2fAAAAAAAAEvU%2f4GXC4EAt1qY%2fs1600%2fHigh_Definition_Wallpaper_003.jpg&ehk=jLlRUfYIT0uJFLXn34HTWurF1uHOQluqt1FYLN7CyVE%3d&risl=&pid=ImgRaw&r=0',
            'https://jooinn.com/images/lonely-tree-reflection-3.jpg',
            'https://th.bing.com/th/id/R.38a45f948b46fb91610374867fa4b144?rik=oVzavJMnvojjfg&riu=http%3a%2f%2fwww.wallpapers-full-hd.com%2fbackgrounds%2fdandelion-picture.jpg&ehk=DUB%2f6nZOJJvxT5PcM4STX9akamcj2xW2tZl5XbONUwQ%3d&risl=&pid=ImgRaw&r=0',
            'https://wallpapercave.com/wp/wp2356022.png',
        ],
        price: 20000,
        discountedPrice: 0,
        dateAdded: '2024-03-01',
        shortDescription: 'Lorem ipsum dolor sit amet'
    },
    {
        id: 'product-7',
        title: 'Product 7',
        description: '<div><h1>Welcome to Our Website</h1><p>This is a sample description of our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi euismod, finibus eros id, mollis ex. Donec sit amet dolor ac nisi pharetra hendrerit. Duis eget augue vitae dui laoreet eleifend. Sed ac libero sit amet ipsum tempor cursus nec eu velit. Mauris posuere magna vel urna faucibus, eu pretium mauris fringilla. Sed tincidunt massa nec elit lacinia, sed placerat ex tincidunt. In hac habitasse platea dictumst. Nullam tincidunt elit at magna congue efficitur. Sed nec mi in justo hendrerit sollicitudin non eu dui. Cras consequat eros nec libero volutpat eleifend. Integer convallis nec mi eget faucibus. Vestibulum vehicula mi non nulla viverra sodales.</p></div>',
        tags: ['React', 'For Business'],
        imageArray: [
            'https://jooinn.com/images/lonely-tree-reflection-3.jpg',
            'https://wallpapercave.com/wp/wp2356022.png',
            'https://th.bing.com/th/id/R.9f4afcb812413da17d55d5c92bd5d26d?rik=TK1g4DTU6kbK7Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-GOZUQ7w3338%2fT1_RsoYwMtI%2fAAAAAAAAEvU%2f4GXC4EAt1qY%2fs1600%2fHigh_Definition_Wallpaper_003.jpg&ehk=jLlRUfYIT0uJFLXn34HTWurF1uHOQluqt1FYLN7CyVE%3d&risl=&pid=ImgRaw&r=0',
            'https://th.bing.com/th/id/R.38a45f948b46fb91610374867fa4b144?rik=oVzavJMnvojjfg&riu=http%3a%2f%2fwww.wallpapers-full-hd.com%2fbackgrounds%2fdandelion-picture.jpg&ehk=DUB%2f6nZOJJvxT5PcM4STX9akamcj2xW2tZl5XbONUwQ%3d&risl=&pid=ImgRaw&r=0',
        ],
        price: 30000,
        discountedPrice: 26000,
        dateAdded: '2024-02-01',
        shortDescription: 'Lorem ipsum dolor sit amet'
    },
    {
        id: 'product-8',
        title: 'Product 8',
        description: '<div><h1>Welcome to Our Website</h1><p>This is a sample description of our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi euismod, finibus eros id, mollis ex. Donec sit amet dolor ac nisi pharetra hendrerit. Duis eget augue vitae dui laoreet eleifend. Sed ac libero sit amet ipsum tempor cursus nec eu velit. Mauris posuere magna vel urna faucibus, eu pretium mauris fringilla. Sed tincidunt massa nec elit lacinia, sed placerat ex tincidunt. In hac habitasse platea dictumst. Nullam tincidunt elit at magna congue efficitur. Sed nec mi in justo hendrerit sollicitudin non eu dui. Cras consequat eros nec libero volutpat eleifend. Integer convallis nec mi eget faucibus. Vestibulum vehicula mi non nulla viverra sodales.</p></div>',
        tags: ['ReactJS', 'School Project'],
        imageArray: [
            'https://th.bing.com/th/id/R.9f4afcb812413da17d55d5c92bd5d26d?rik=TK1g4DTU6kbK7Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-GOZUQ7w3338%2fT1_RsoYwMtI%2fAAAAAAAAEvU%2f4GXC4EAt1qY%2fs1600%2fHigh_Definition_Wallpaper_003.jpg&ehk=jLlRUfYIT0uJFLXn34HTWurF1uHOQluqt1FYLN7CyVE%3d&risl=&pid=ImgRaw&r=0',
            'https://th.bing.com/th/id/R.38a45f948b46fb91610374867fa4b144?rik=oVzavJMnvojjfg&riu=http%3a%2f%2fwww.wallpapers-full-hd.com%2fbackgrounds%2fdandelion-picture.jpg&ehk=DUB%2f6nZOJJvxT5PcM4STX9akamcj2xW2tZl5XbONUwQ%3d&risl=&pid=ImgRaw&r=0',
            'https://wallpapercave.com/wp/wp2356022.png',
            'https://jooinn.com/images/lonely-tree-reflection-3.jpg',
        ],
        price: 40000,
        discountedPrice: 30000,
        dateAdded: '2024-01-01',
        shortDescription: 'Lorem ipsum dolor sit amet'
    },
    {
        id: 'product-8',
        title: 'Product 8',
        description: '<div><h1>Welcome to Our Website</h1><p>This is a sample description of our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi euismod, finibus eros id, mollis ex. Donec sit amet dolor ac nisi pharetra hendrerit. Duis eget augue vitae dui laoreet eleifend. Sed ac libero sit amet ipsum tempor cursus nec eu velit. Mauris posuere magna vel urna faucibus, eu pretium mauris fringilla. Sed tincidunt massa nec elit lacinia, sed placerat ex tincidunt. In hac habitasse platea dictumst. Nullam tincidunt elit at magna congue efficitur. Sed nec mi in justo hendrerit sollicitudin non eu dui. Cras consequat eros nec libero volutpat eleifend. Integer convallis nec mi eget faucibus. Vestibulum vehicula mi non nulla viverra sodales.</p></div>',
        tags: ['SALE', 'PHP', 'NodeJS', 'Custom Website'],
        imageArray: [
            'https://jooinn.com/images/lonely-tree-reflection-3.jpg',
            'https://th.bing.com/th/id/R.38a45f948b46fb91610374867fa4b144?rik=oVzavJMnvojjfg&riu=http%3a%2f%2fwww.wallpapers-full-hd.com%2fbackgrounds%2fdandelion-picture.jpg&ehk=DUB%2f6nZOJJvxT5PcM4STX9akamcj2xW2tZl5XbONUwQ%3d&risl=&pid=ImgRaw&r=0',
            'https://wallpapercave.com/wp/wp2356022.png',
            'https://th.bing.com/th/id/R.9f4afcb812413da17d55d5c92bd5d26d?rik=TK1g4DTU6kbK7Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-GOZUQ7w3338%2fT1_RsoYwMtI%2fAAAAAAAAEvU%2f4GXC4EAt1qY%2fs1600%2fHigh_Definition_Wallpaper_003.jpg&ehk=jLlRUfYIT0uJFLXn34HTWurF1uHOQluqt1FYLN7CyVE%3d&risl=&pid=ImgRaw&r=0',
        ],
        price: 12000,
        discountedPrice: 8000,
        dateAdded: '2023-04-01',
        shortDescription: 'Lorem ipsum dolor sit amet'
    },
    {
        id: 'product-9',
        title: 'Product 9',
        description: '<div><h1>Welcome to Our Website</h1><p>This is a sample description of our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi euismod, finibus eros id, mollis ex. Donec sit amet dolor ac nisi pharetra hendrerit. Duis eget augue vitae dui laoreet eleifend. Sed ac libero sit amet ipsum tempor cursus nec eu velit. Mauris posuere magna vel urna faucibus, eu pretium mauris fringilla. Sed tincidunt massa nec elit lacinia, sed placerat ex tincidunt. In hac habitasse platea dictumst. Nullam tincidunt elit at magna congue efficitur. Sed nec mi in justo hendrerit sollicitudin non eu dui. Cras consequat eros nec libero volutpat eleifend. Integer convallis nec mi eget faucibus. Vestibulum vehicula mi non nulla viverra sodales.</p></div>',
        tags: ['SALE', 'ReactJS', 'For Students', 'Custom Software'],
        imageArray: [
            'https://th.bing.com/th/id/R.38a45f948b46fb91610374867fa4b144?rik=oVzavJMnvojjfg&riu=http%3a%2f%2fwww.wallpapers-full-hd.com%2fbackgrounds%2fdandelion-picture.jpg&ehk=DUB%2f6nZOJJvxT5PcM4STX9akamcj2xW2tZl5XbONUwQ%3d&risl=&pid=ImgRaw&r=0',
            'https://jooinn.com/images/lonely-tree-reflection-3.jpg',
            'https://th.bing.com/th/id/R.9f4afcb812413da17d55d5c92bd5d26d?rik=TK1g4DTU6kbK7Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-GOZUQ7w3338%2fT1_RsoYwMtI%2fAAAAAAAAEvU%2f4GXC4EAt1qY%2fs1600%2fHigh_Definition_Wallpaper_003.jpg&ehk=jLlRUfYIT0uJFLXn34HTWurF1uHOQluqt1FYLN7CyVE%3d&risl=&pid=ImgRaw&r=0',
            'https://wallpapercave.com/wp/wp2356022.png',
        ],
        price: 14000,
        discountedPrice: 8500,
        dateAdded: '2022-01-01',
        shortDescription: 'Lorem ipsum dolor sit amet'
    },
    {
        id: 'product-10',
        title: 'Product 10',
        description: '<div><h1>Welcome to Our Website</h1><p>This is a sample description of our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi euismod, finibus eros id, mollis ex. Donec sit amet dolor ac nisi pharetra hendrerit. Duis eget augue vitae dui laoreet eleifend. Sed ac libero sit amet ipsum tempor cursus nec eu velit. Mauris posuere magna vel urna faucibus, eu pretium mauris fringilla. Sed tincidunt massa nec elit lacinia, sed placerat ex tincidunt. In hac habitasse platea dictumst. Nullam tincidunt elit at magna congue efficitur. Sed nec mi in justo hendrerit sollicitudin non eu dui. Cras consequat eros nec libero volutpat eleifend. Integer convallis nec mi eget faucibus. Vestibulum vehicula mi non nulla viverra sodales.</p></div>',
        tags: ['NodeJS'],
        imageArray: [
            'https://th.bing.com/th/id/R.9f4afcb812413da17d55d5c92bd5d26d?rik=TK1g4DTU6kbK7Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-GOZUQ7w3338%2fT1_RsoYwMtI%2fAAAAAAAAEvU%2f4GXC4EAt1qY%2fs1600%2fHigh_Definition_Wallpaper_003.jpg&ehk=jLlRUfYIT0uJFLXn34HTWurF1uHOQluqt1FYLN7CyVE%3d&risl=&pid=ImgRaw&r=0',
            'https://th.bing.com/th/id/R.38a45f948b46fb91610374867fa4b144?rik=oVzavJMnvojjfg&riu=http%3a%2f%2fwww.wallpapers-full-hd.com%2fbackgrounds%2fdandelion-picture.jpg&ehk=DUB%2f6nZOJJvxT5PcM4STX9akamcj2xW2tZl5XbONUwQ%3d&risl=&pid=ImgRaw&r=0',
            'https://jooinn.com/images/lonely-tree-reflection-3.jpg',
            'https://wallpapercave.com/wp/wp2356022.png',
        ],
        price: 15000,
        discountedPrice: 0,
        dateAdded: '2024-02-01',
        shortDescription: 'Lorem ipsum dolor sit amet'
    },
    {
        id: 'product-11',
        title: 'Product 11',
        description: '<div><h1>Welcome to Our Website</h1><p>This is a sample description of our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi euismod, finibus eros id, mollis ex. Donec sit amet dolor ac nisi pharetra hendrerit. Duis eget augue vitae dui laoreet eleifend. Sed ac libero sit amet ipsum tempor cursus nec eu velit. Mauris posuere magna vel urna faucibus, eu pretium mauris fringilla. Sed tincidunt massa nec elit lacinia, sed placerat ex tincidunt. In hac habitasse platea dictumst. Nullam tincidunt elit at magna congue efficitur. Sed nec mi in justo hendrerit sollicitudin non eu dui. Cras consequat eros nec libero volutpat eleifend. Integer convallis nec mi eget faucibus. Vestibulum vehicula mi non nulla viverra sodales.</p></div>',
        tags: ['SALE', 'PHP', 'Custom Website'],
        imageArray: [
            'https://th.bing.com/th/id/R.9f4afcb812413da17d55d5c92bd5d26d?rik=TK1g4DTU6kbK7Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-GOZUQ7w3338%2fT1_RsoYwMtI%2fAAAAAAAAEvU%2f4GXC4EAt1qY%2fs1600%2fHigh_Definition_Wallpaper_003.jpg&ehk=jLlRUfYIT0uJFLXn34HTWurF1uHOQluqt1FYLN7CyVE%3d&risl=&pid=ImgRaw&r=0',
            'https://jooinn.com/images/lonely-tree-reflection-3.jpg',
            'https://th.bing.com/th/id/R.38a45f948b46fb91610374867fa4b144?rik=oVzavJMnvojjfg&riu=http%3a%2f%2fwww.wallpapers-full-hd.com%2fbackgrounds%2fdandelion-picture.jpg&ehk=DUB%2f6nZOJJvxT5PcM4STX9akamcj2xW2tZl5XbONUwQ%3d&risl=&pid=ImgRaw&r=0',
            'https://wallpapercave.com/wp/wp2356022.png',
        ],
        price: 20000,
        discountedPrice: 10000,
        dateAdded: '2024-03-01',
        shortDescription: 'Lorem ipsum dolor sit amet'
    },
    {
        id: 'product-12',
        title: 'Product 12',
        description: '<div><h1>Welcome to Our Website</h1><p>This is a sample description of our website. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi euismod, finibus eros id, mollis ex. Donec sit amet dolor ac nisi pharetra hendrerit. Duis eget augue vitae dui laoreet eleifend. Sed ac libero sit amet ipsum tempor cursus nec eu velit. Mauris posuere magna vel urna faucibus, eu pretium mauris fringilla. Sed tincidunt massa nec elit lacinia, sed placerat ex tincidunt. In hac habitasse platea dictumst. Nullam tincidunt elit at magna congue efficitur. Sed nec mi in justo hendrerit sollicitudin non eu dui. Cras consequat eros nec libero volutpat eleifend. Integer convallis nec mi eget faucibus. Vestibulum vehicula mi non nulla viverra sodales.</p></div>',
        tags: ['SALE', 'PHP', 'Custom Website'],
        imageArray: [
            'https://th.bing.com/th/id/R.9f4afcb812413da17d55d5c92bd5d26d?rik=TK1g4DTU6kbK7Q&riu=http%3a%2f%2f3.bp.blogspot.com%2f-GOZUQ7w3338%2fT1_RsoYwMtI%2fAAAAAAAAEvU%2f4GXC4EAt1qY%2fs1600%2fHigh_Definition_Wallpaper_003.jpg&ehk=jLlRUfYIT0uJFLXn34HTWurF1uHOQluqt1FYLN7CyVE%3d&risl=&pid=ImgRaw&r=0',
            'https://jooinn.com/images/lonely-tree-reflection-3.jpg',
            'https://th.bing.com/th/id/R.38a45f948b46fb91610374867fa4b144?rik=oVzavJMnvojjfg&riu=http%3a%2f%2fwww.wallpapers-full-hd.com%2fbackgrounds%2fdandelion-picture.jpg&ehk=DUB%2f6nZOJJvxT5PcM4STX9akamcj2xW2tZl5XbONUwQ%3d&risl=&pid=ImgRaw&r=0',
            'https://wallpapercave.com/wp/wp2356022.png',
        ],
        price: 25000,
        discountedPrice: 0,
        dateAdded: '2024-04-01',
        shortDescription: 'Lorem ipsum dolor sit amet'
    },
];


export { sampleData };