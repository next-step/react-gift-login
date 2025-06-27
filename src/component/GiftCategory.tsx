import { categories } from '@/data/categories'
import { useState, useEffect } from 'react'
import * as styles from '@/component/GiftCategory.styles'

const GiftCategory = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const handleSelect = (id: number) => {
    setSelectedId(id)
  }

  useEffect(() => {
    console.log('선택된 ID:', selectedId)
  }, [selectedId])

  return (
    <styles.Container>
      <styles.Title>선물 테마</styles.Title>
      <styles.Grid>
        {categories.map((item) => (
          <styles.Item
            key={item.themeId}
            onClick={() => handleSelect(item.themeId)}
          >
            <styles.ItemImage src={item.image} alt={item.name} />
            <styles.ItemName>{item.name}</styles.ItemName>
          </styles.Item>
        ))}
      </styles.Grid>
    </styles.Container>
  )
}

export default GiftCategory
