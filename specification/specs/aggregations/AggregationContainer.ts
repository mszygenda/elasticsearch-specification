class AggregationContainer {
  adjacency_matrix?: AdjacencyMatrixAggregation
  aggs?: Dictionary<string, AggregationContainer>
  aggregations?: Dictionary<string, AggregationContainer>
  auto_date_histogram?: AutoDateHistogramAggregation
  avg?: AverageAggregation
  avg_bucket?: AverageBucketAggregation
  boxplot?: BoxplotAggregation
  bucket_script?: BucketScriptAggregation
  bucket_selector?: BucketSelectorAggregation
  bucket_sort?: BucketSortAggregation
  cardinality?: CardinalityAggregation
  children?: ChildrenAggregation
  composite?: CompositeAggregation
  cumulative_cardinality?: CumulativeCardinalityAggregation
  cumulative_sum?: CumulativeSumAggregation
  date_histogram?: DateHistogramAggregation
  date_range?: DateRangeAggregation
  derivative?: DerivativeAggregation
  extended_stats?: ExtendedStatsAggregation
  extended_stats_bucket?: ExtendedStatsBucketAggregation
  filter?: QueryContainer
  filters?: FiltersAggregation
  geo_bounds?: GeoBoundsAggregation
  geo_centroid?: GeoCentroidAggregation
  geo_distance?: GeoDistanceAggregation
  geohash_grid?: GeoHashGridAggregation
  geotile_grid?: GeoTileGridAggregation
  global?: GlobalAggregation
  histogram?: HistogramAggregation
  ip_range?: IpRangeAggregation
  matrix_stats?: MatrixStatsAggregation
  max?: MaxAggregation
  max_bucket?: MaxBucketAggregation
  median_absolute_deviation?: MedianAbsoluteDeviationAggregation
  meta?: Dictionary<string, string | number | boolean>
  min?: MinAggregation
  min_bucket?: MinBucketAggregation
  missing?: MissingAggregation
  moving_avg?: MovingAverageAggregation
  moving_fn?: MovingFunctionAggregation
  nested?: NestedAggregation
  parent?: ParentAggregation
  percentile_ranks?: PercentileRanksAggregation
  percentiles?: PercentilesAggregation
  percentiles_bucket?: PercentilesBucketAggregation
  range?: RangeAggregation
  rare_terms?: RareTermsAggregation
  reverse_nested?: ReverseNestedAggregation
  sampler?: SamplerAggregation
  scripted_metric?: ScriptedMetricAggregation
  serial_diff?: SerialDifferencingAggregation
  significant_terms?: SignificantTermsAggregation
  significant_text?: SignificantTextAggregation
  stats?: StatsAggregation
  stats_bucket?: StatsBucketAggregation
  string_stats?: StringStatsAggregation
  sum?: SumAggregation
  sum_bucket?: SumBucketAggregation
  terms?: TermsAggregation
  top_hits?: TopHitsAggregation
  top_metrics?: TopMetricsAggregation
  value_count?: ValueCountAggregation
  weighted_avg?: WeightedAverageAggregation
  variable_width_histogram?: VariableWidthHistogramAggregation
}

type Missing = string | integer | boolean
