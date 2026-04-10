export interface MerkleProofRequest {
  address: string;
  tokenId?: string;
  data?: any;
}

export interface MerkleProofResponse {
  proof: string[];
  root: string;
  leaf: string;
}

export async function fetchMerkleProof(request: MerkleProofRequest): Promise<MerkleProofResponse> {
  try {
    const response = await fetch('/api/merkle', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error(`Merkle API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Merkle proof:', error);
    throw error;
  }
}

// Utility for eCommerce rewards verification
export async function verifyUserRewards(address: string) {
  try {
    const proof = await fetchMerkleProof({ address });
    // Process the proof for UMBDT rewards
    return {
      isValid: proof.proof.length > 0,
      rewards: {
        umbdtBalance: calculateUMBDTFromProof(proof),
        canRedeem: true,
      },
    };
  } catch (error) {
    console.error('Reward verification failed:', error);
    return null;
  }
}

function calculateUMBDTFromProof(proof: MerkleProofResponse): number {
  // Implement your logic to calculate UMBDT from Merkle proof
  // This is where you'd decode the leaf data
  return 0;
}