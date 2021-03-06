import React, { useContext } from 'react'
import styles from './reference.module.css'
import LabelList from './label-list'
import type { IReference } from '../interfaces'
import { useReferences } from './reference-provider'

export default function Reference(props : IReference) {
  const {
    id,
    name,
    parent,
    description,
    date,
    labels,
  } = props

  const {
    handleReferenceSelect,
    handleReferenceExpandChange,
    selectedReference
  } = useReferences()

  function handleReferenceClick() {
    selectedReference && selectedReference.id === id
    ? handleReferenceExpandChange()
    : handleReferenceSelect(id)
  }

  const emphasisStyle = {
    backgroundColor: 'hsl(210, 8%, 93%)'
  } as React.CSSProperties

  return (
    <div
      className={styles.container}
      onClick={() => handleReferenceClick()}
      style={(selectedReference && selectedReference.id === id) ? emphasisStyle : undefined }
    >
      <div>
        <span className={styles.identifier}>{name}</span>
        <span className={styles.parent}>{` › `}</span>
        <span className={`${styles.parent} mr-1`}>{parent}</span>
        <span className={styles.title}>{description}</span>
      </div>
      <div>
        <span className={`${styles.labels} mr-1`}>
          <LabelList labels={labels} />
        </span>
        <span className={`${styles.createdAt} mr-1`}>{date}</span>
        <span className={styles.assignee}></span>
      </div>
    </div>
  )
}
