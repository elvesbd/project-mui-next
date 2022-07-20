import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Environments } from '../../environment'

interface IToolsBarProps {
  searchText?: string
  showInputSearch?: boolean
  changeTextSearch?: (newText: string) => void
  newButtonText?: string
  showNewButton?: boolean
  clickNew?: () => void
}

export const ToolsListing: React.FC<IToolsBarProps> = ({
  searchText = '',
  showInputSearch = false,
  changeTextSearch,
  newButtonText = 'Novo',
  showNewButton = true,
  clickNew,
}) => {
  const theme = useTheme()

  return (
    <Box
      component={Paper}
      height={theme.spacing(5)}
      display="flex"
      alignItems="center"
      padding={1}
      paddingX={2}
      marginX={1}
      gap={1}
    >
      <Box display="flex" alignItems="center" justifyContent="center">
        {showInputSearch && (
          <TextField
            value={searchText}
            onChange={(e) => changeTextSearch?.(e.target.value)}
            size="small"
            placeholder={Environments.INPUT_SEARCH}
            InputProps={{
              endAdornment: <Icon sx={{ color: grey[500] }}>search</Icon>,
            }}
          />
        )}
      </Box>

      <Box flex={1} display="flex" justifyContent="end">
        {showNewButton && (
          <Button
            variant="contained"
            disableElevation
            endIcon={<Icon>add</Icon>}
            onClick={clickNew}
          >
            {newButtonText}
          </Button>
        )}
      </Box>
    </Box>
  )
}
