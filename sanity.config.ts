import {defineConfig, isDev} from 'sanity'
import {schemaTypes} from './sanity/schemaTypes'
import {visionTool} from '@sanity/vision'
import {structureTool} from 'sanity/structure'

export default defineConfig({
  name: 'default',
  title: 'ecommerce-app',

  projectId: '5oc9ygqs',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})